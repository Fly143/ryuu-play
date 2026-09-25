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

export class Honchkrow_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Murkrow";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkness Restore", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Honchkrow is your Active Pokémon and your opponent's Bench isn't full, you may use this power. Search your opponent's discard pile for a Basic Pokémon and put it onto his or her bench. This power can't be used if Honchkrow is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Riot", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each Pokémon that isn't an evolved Pokémon in play (both yours and your opponent's)." }
  ];
  public set: string = "SV";
  public name: string = "Honchkrow";
  public fullName: string = "Honchkrow SV 29";
  public text: string = "Honchkrow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
