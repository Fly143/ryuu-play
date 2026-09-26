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

export class Banette_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Δ Evolution", powerType: PowerType.ABILITY, text: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Evolution Jammer", cost: [], damage: "20", text: "Your opponent can't play any Pokémon from his or her hand to evolve his or her Pokémon during his or her next turn." },
      { name: "Curse Deeply", cost: [], damage: "", text: "Put 5 damage counters on your opponent's Active Pokémon." }
  ];
  public set: string = "AOR";
  public name: string = "Banette";
  public fullName: string = "Banette AOR 32";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "earlyEvolution");
    }
    return state;
  }
}
