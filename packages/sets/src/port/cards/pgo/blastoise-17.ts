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

export class Blastoise_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wartortle";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Vitality Spring", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for up to 6 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. If you use this Ability, your turn ends.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydro Pump", cost: [], damage: "90+", text: "This attack does 30 more damage for each Water Energy attached to this Pokémon." }
  ];
  public set: string = "PGO";
  public name: string = "Blastoise";
  public fullName: string = "Blastoise PGO 17";
  public text: string = "Blastoise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchEnergyToSelf");
    }
    return state;
  }
}
