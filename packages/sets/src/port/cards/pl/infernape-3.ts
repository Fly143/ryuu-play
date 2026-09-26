import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Infernape_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Monferno";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blaze Dance", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you play Infernape from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, search your deck for up to 4 Fire Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Close Combat", cost: [], damage: "60", text: "During your opponent's next turn, any damage done to Infernape by attacks is increased by 30 (after applying Weakness and Resistance)." },
      { name: "Spreading Fire", cost: [], damage: "80", text: "Discard 2 Fire Energy attached to Infernape and this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PL";
  public name: string = "Infernape";
  public fullName: string = "Infernape PL 3";
  public text: string = "Infernape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchEnergyToSelf:4");
    }
    return state;
  }
}
